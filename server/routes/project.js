const router = require("express").Router();
const Project = require("../models/project");
const Tender = require("../models/tender");
let User = require("../models/user");
// POST request - create a new card
router.post("/projects", async (req, res) => {
  try {
    let project = new Project();
    project.name = req.body.name; 
    project.prjStartDate = req.body.prjStartDate;
    project.prjEndDate = req.body.prjEndDate;
    project.tenderStartDate = req.body.tenderStartDate;
    project.tenderEndDate = req.body.tenderEndDate;
    project.expBudget = req.body.expBudget;
    project.location = req.body.location;
    project.details = req.body.details;
    project.link = req.body.link;
    // project.approved = req.body.approved;
    project.tenders = [];
    project.final_tender = null;
    project.status = 0;
    console.log(project);
    await project.save();

    res.json({
      status: true,
      message: "Successfully saved",
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      message: err.message,
    });
  }
});

// GET request - get all interncards
router.get("/projects", async (req, res) => {
  try {
    let projects = await Project.find().exec();

    res.json({
      success: true,
      projects: projects,
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      message: err.message,
    });
  }
});

// GET request - get a single interncard
router.get("/projects/:id", async (req, res) => {
  try {
    let project = await Project.findOne({ _id: req.params.id });
    res.json({
      success: true,
      project: project,
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      message: err.message,
    });
  }
});

// PUT request - update a single interncard
router.put("/projects/:id", async (req, res) => { 
  try {
    let project = await Project.findOneAndUpdate(
      { _id: req.params.id },
      {
        $set: {
            name : req.body.name,
            prjStartDate : req.body.prjStartDate,
            prjEndDate : req.body.prjEndDate,
            tenderStartDate : req.body.tenderStartDate,
            tenderEndDate : req.body.tenderEndDate,
            expBudget : req.body.expBudget,
            location : req.body.location,
            details : req.body.details,
            link : req.body.link,
            tenders: req.body.tenders,
            status : req.body.status,
            final_tender : req.body.final_tender,
        },
      },
      { upsert: true }
    );

    res.json({
      success: true,
      updateProject: project,
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      message: err.message,
    });
  }
});

// DELETE request - delete a single interncard
router.delete("/projects/:id", async (req, res) => {
  try {
    let project = await Project.findOne({_id: req.params.id });
    for(let i =0; i<project.tenders.length; i++){
        let id = project.tenders[i]._id;
        let user_id = project.tenders[i].contractor_id;
        let user=  await User.findOne({_id: user_id});
        // let arr = user.my_projects;
        // let idd = arr.indexOf(project.tenders[i]);
        // arr.splice(idd,1);
        let arr = [];
        for(let j=0;i<user.my_projects.length;i++)
        {
          if(user.my_projects[j]._id == project.tenders[i]._id){}
          else 
          {
            arr.push(user.my_projects[j]);
          }
        }
        let userr = await User.findOneAndUpdate({_id:user_id},{
          $set: {
            my_projects: arr,
          },
        },
        { upsert: true } );
        let deleteTender = await Tender.findOneAndDelete({_id: id});
    }
    let deleteProject = await Project.findOneAndDelete({ _id: req.params.id });
    if (deleteProject) {
      res.json({
        status: true,
        message: "Successfuly deleted!",
      });
    }
  } catch (err) {
    res.status(500).json({
      success: false,
      message: err.message,
    });
  }
});

router.put("/projectapprove/", async (req, res) => {
  try {
    let project = await Project.findOne({_id: req.body.project_id });
    let tender = await Tender.findOne({_id : req.body.tender_id})
    // console.log(project);
    // console.log(tender);
    let arr = [];
    for(let i=0;i<project.tenders.length;i++)
    {
      if(project.tenders[i]._id == req.body.tender_id){}
      else 
      {
        arr.push(project.tenders[i]);
      }
    }
    let updatetender = await Tender.findOneAndUpdate({_id : req.body.tender_id},
      {
        $set: {
          approved : 1
        }
      },{ upsert: true });  

    let user = await User.findOne({_id: tender.contractor_id});
    let arr2 = [];
    for(let i=0;i<user.my_projects.length;i++)
    {
      if(user.my_projects[i]._id == req.body.tender_id){}
      else 
      {
        arr2.push(user.my_projects[i]);
      }
    }
    
    tender.approved = 1;
    arr.push(tender);
    arr2.push(tender);
    //console.log(arr);
    let updateProject = await Project.findOneAndUpdate({_id : req.body.project_id},
      {
        $set: {
          status : 2,
          tenders: arr,
          final_tender: tender,
        }
      },{ upsert: true });
      
      let updateTender = await Tender.findOneAndUpdate({_id : req.body.tender_id},
        {
          $set: {
            approved : 1
          }
        },{ upsert: true });
      
        let updateUser = await User.findOneAndUpdate({_id : tender.contractor_id},
          {
            $set: {
              my_projects : arr2
            }
          },{ upsert: true });
      
    if (updateProject) {
      res.json({
        status: true,
        message: "Successfuly updated!",
      });
    }
  } catch (err) {
    console.log(err.message)
    res.status(500).json({
      success: false,
      message: err.message,
    });
  }
});


router.put("/projectapprovegovt/", async (req, res) => {
  try {
    let project = await Project.findOne({_id: req.body.project_id });
    let tender = await Tender.findOne({_id : req.body.tender_id})
    // console.log(project);
    // console.log(tender);
    let arr = [];
    for(let i=0;i<project.tenders.length;i++)
    {
      if(project.tenders[i]._id == req.body.tender_id){}
      else 
      {
        arr.push(project.tenders[i]);
      }
    }
    // console.log(arr);
    let updatetender = await Tender.findOneAndUpdate({_id : req.body.tender_id},
      {
        $set: {
          approved : 2
        }
      },{ upsert: true });  

    let user = await User.findOne({_id: tender.contractor_id});
    let arr2 = [];
    for(let i=0;i<user.my_projects.length;i++)
    {
      if(user.my_projects[i]._id == req.body.tender_id){}
      else 
      {
        arr2.push(user.my_projects[i]);
      }
    }
    
    tender.approved = 2;
    arr.push(tender);
    arr2.push(tender);
    //console.log(arr);
    let updateProject = await Project.findOneAndUpdate({_id : req.body.project_id},
      {
        $set: {
          status : 3,
          tenders: arr,
          
        }
      },{ upsert: true });
      
      let updateTender = await Tender.findOneAndUpdate({_id : req.body.tender_id},
        {
          $set: {
            approved : 2
          }
        },{ upsert: true });
      
        let updateUser = await User.findOneAndUpdate({_id : tender.contractor_id},
          {
            $set: {
              my_projects : arr2
            }
          },{ upsert: true });
      
    if (updateProject) {
      res.json({
        status: true,
        message: "Successfuly updated!",
      });
    }
  } catch (err) {
    console.log(err.message); 
    res.status(500).json({
      success: false,
      message: err.message,
    });
  }
});

router.put("/projectdisapprovegovt/", async (req, res) => {
  try {
    let project = await Project.findOne({_id: req.body.project_id });
    let tender = await Tender.findOne({_id : req.body.tender_id})
    // console.log(project);
    // console.log(tender);
    let arr = [];
    for(let i=0;i<project.tenders.length;i++)
    {
      if(project.tenders[i]._id == req.body.tender_id){}
      else 
      {
        arr.push(project.tenders[i]);
      }
    }
    // console.log(arr);
    let updatetender = await Tender.findOneAndUpdate({_id : req.body.tender_id},
      {
        $set: {
          approved : 0
        }
      },{ upsert: true });  

    let user = await User.findOne({_id: tender.contractor_id});
    let arr2 = [];
    for(let i=0;i<user.my_projects.length;i++)
    {
      if(user.my_projects[i]._id == req.body.tender_id){}
      else 
      {
        arr2.push(user.my_projects[i]);
      }
    }
    tender.approved = 0;
    arr.push(tender);
    arr2.push(tender);
    //console.log(arr);
    let updateProject = await Project.findOneAndUpdate({_id : req.body.project_id},
      {
        $set: {
          status : 1,
          tenders: arr,
          final_tender : null,
        }
      },{ upsert: true });
      
      let updateTender = await Tender.findOneAndUpdate({_id : req.body.tender_id},
        {
          $set: {
            approved : 0
          }
        },{ upsert: true });
      
        let updateUser = await User.findOneAndUpdate({_id : tender.contractor_id},
          {
            $set: {
              my_projects : arr2
            }
          },{ upsert: true });
      
    if (updateProject) {
      res.json({
        status: true,
        message: "Successfuly updated!",
      });
    }
  } catch (err) {
    res.status(500).json({
      success: false,
      message: err.message,
    });
  }
});

module.exports = router;
