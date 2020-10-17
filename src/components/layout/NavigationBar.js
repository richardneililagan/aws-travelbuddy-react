import React, { Fragment, useState, useEffect, useCallback} from "react";
import { Link } from "react-router-dom";
import LanguageIcon from '@material-ui/icons/Language';
import Button from 'react-bootstrap/Button'
import Divider from '@material-ui/core/Divider';
import {SiFloatplane} from "react-icons/si"
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import Modal from 'react-bootstrap/Modal'
import Image from "react-bootstrap/Image"
import {Storage} from "aws-amplify"
import {useDropzone} from 'react-dropzone'
import {IoMdPhotos} from 'react-icons/io'
import Row from "react-bootstrap/Row"
import {SyncLoader} from "react-spinners"
import Col from "react-bootstrap/Col"

const onClick = () => {
  const nav = document.querySelector(".navbar-logo");
  const navLinks = document.querySelectorAll(".navbar-logo li");
  nav.classList.toggle("nav-active");

  navLinks.forEach((link, index) => {
    if (link.style.animation) {
      link.style.animation = "";
    } else {
      link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 +
        0.2}s`;
    }
  });
  // Burg Animation
  const burger = document.querySelector(".burger");
  burger.classList.toggle("toggle");
  if (nav.classList.value.includes("nav-active")) {
    const lang = document.querySelector(".nav-links-lang");
    const loyalty = document.querySelector(".nav-links-loyalty");
    const manage = document.querySelector(".nav-links-manage");
    const login = document.querySelector(".nav-links-login");
    const join = document.querySelector(".nav-links-join");

    lang.addEventListener("click", () => {
      onClick();
    });

    loyalty.addEventListener("click", () => {
      onClick();
    });

    manage.addEventListener("click", () => {
      onClick();
    });

    login.addEventListener("click", () => {
      onClick();
    });

    join.addEventListener("click", () => {
      onClick();
    });
    
  }
};

const NavigationBar = (props) => {
  const [click, setClick] = useState(false);
  const [profileModal, setprofileModal] = useState(false);
  const [isLoading, setisLoading] = useState(false);
  const [photoUploaded, setphotoUploaded] = useState(false)
  const [isError, setisError] = useState(false)
  const isLoadingMethod = () => {
    if (isLoading===true) {
return (

  <Button variant="primary" onClick={saveFile}>
  <SyncLoader size={8} style={{marginTop:'5px'}} />
</Button>
)
    } else {
return (
  <Button variant="primary" onClick={saveFile}>
  Make Changes
</Button>
)
    }
  }
  const [profileState, setprofileState] = useState({
    fileUrl:'',
    file:'',
    filename:''
  })

  const handleClick=()=> setClick(!click);

  const profileClose = () =>{
    setprofileModal(false)  
  }

  const profileOpen = () =>{
    setprofileModal(true)  
  }

  const handleFileChange=e=>{
    const file = e.target.files[0]
    console.log("File Type",file.type)
    if (file.type == "image/jpeg" || file.type=="image/png") {
      setisError(false); 
    setprofileState({
      fileUrl:URL.createObjectURL(file),
      file,
      filename:props.username
    })
  } else { 
    setisError(true); 
  }
}

  const saveFile=()=>{
    if (profileState.fileUrl!=='') {
      setisLoading(true)
      Storage.put(profileState.filename, profileState.file)
        .then(()=>{
          console.log("Successfully saved file!")
          setisLoading(false);
          setphotoUploaded(true);
        })
        .catch(err=>{
          console.log("Error uploading file", err)
        })
    }
  }

  const showProfilepic=()=>{
    if (photoUploaded===false) {
      return (
        <Link to="/home" onClick={profileOpen}> <AccountCircleIcon style={{marginBottom:"3px", opacity:"0.7"}} />  {props.username} </Link>
      )
    }
    else if (photoUploaded===true) {
      return (
        <Link to="/home" onClick={profileOpen}>  <Image src={profileState.fileUrl} roundedCircle style={{height:'23px',width:"23px", marginRight:"5px", marginBottom:"2px"}} /> {props.username} </Link>
      )
    }
  }
  
  useEffect(() => {
    
    Storage.list('',{level :'public'})
      .then(result => {
        result.map((key) => {
          if (props.username == key.key){
            console.log("Existing Profile Picture found in S3 bucket:", key.key);
            setphotoUploaded(true);
            var URL = props.username.replace(/\s/g, ''); 
            Storage.get(URL)
            .then(data=>{
              setprofileState({
                fileUrl:data,
                filename:props.username,
              })
            })
            .catch(err=>{
              console.log('error fetching image', err);
            })
          }
        })
      })
      .catch(err => console.log(err));
  }, []);
  
  const onDrop = useCallback(e => {
    const file = e[0];
    if (file.type == "image/jpeg" || file.type=="image/png") {
    setisError(false); 
    setprofileState({
      fileUrl:URL.createObjectURL(file),
      file,
      filename:props.username
    });
    setphotoUploaded(true)
  } else {
    setisError(true)
  }
  }, [])
  const {getRootProps, getInputProps, isDragActive} = useDropzone({onDrop})

  const showProfilePic = () =>{
    if (photoUploaded===true && isError ===false){
      return(
        <> 
<Row style={{padding:"5%"}}> 
      <h1 style={{color:"grey", fontSize:"17px", textAlign:"center"}}> Your profile picture</h1>
    </Row>
    <Row> 
      <Col></Col>
    <Col><Image src={profileState.fileUrl} roundedCircle style={{height:"100%"}} /></Col> 
    <Col></Col>
      {/* <img src ={profileState.fileUrl}/> */}
    </Row> 
    </> 
      )
    }else if (isError === true){
      return (
        <Row style={{padding:"5%"}}> 
        <Col xl={2}></Col>
        <Col xl={8}><h1 style={{color:"grey", fontSize:"17px", textAlign:"center"}}>Invalid File Type!</h1></Col>
        <Col xl={2}></Col>
    </Row>
      )
    } else {
      return (
        <>
<Row style={{padding:"5%"}}> 
        <Col xl={2}></Col>
        <Col xl={8}><h1 style={{color:"grey", fontSize:"17px", textAlign:"center"}}>No current profile picture </h1></Col>
        <Col xl={2}></Col>
    </Row>
    </>
      )
    }
  }

  const removalButtonMethod = () => {
    if (photoUploaded===true) {
      return (
        <>
        <Button variant="secondary" onClick={removeProfilePic}>
            Remove
          </Button>
        </> 
      )
    } else {
      return (
        <>
        </> 
      )
    }
  }

  const removeProfilePic = () => {
    console.log(profileState.filename)
    Storage.remove(profileState.filename)
    .then(result => console.log(result))
    .catch(err => console.log(err));

    setprofileState({
      fileUrl:"",
      file:"",
      filename:""
    });
    setphotoUploaded(false);

  }
  return (
    <nav className="navbar">
      <ul className="nav-links">
      <li className="nav-links-homepage">
          <Link to="/home" activeClassName="currentlyOn" style={{letterSpacing:"2px",fontSize:"20px", fontWeight:"bolder", textShadow:"0px 0px, 0px 0px, 10.5x 0px"}}>
            <SiFloatplane className="nav-icon" style={{marginRight:"5px", marginBottom:"4px"}} /> 
            TravelBuddy 
          </Link>{" "}
        </li>
      </ul>
      <div className="burger" onClick={onClick}>
        <div className="line1"> </div>
        <div className="line2"> </div>
        <div className="line3"> </div>
      </div>
      <Fragment>
      <ul className="navbar-logo">
      <li className="nav-links-lang">
        <LanguageIcon fontSize="small" style={{marginBottom:'2px', opacity:'0.8', marginRight:"1px"}} /> {'  '}
          <Link to="/home">
            English (UK)
          </Link>{" "}
        </li>
      <li className="nav-links-loyalty" >
          <Link to="/home">
            Loyalty
          </Link>{" "}
        </li>
        <li className="nav-links-manage" >
          <Link to="/home">Manage</Link>
        </li>
        <Divider orientation="vertical" className="navbar-divider" flexItem style={{height:"24px"}} /> 
     <li className="nav-links-login" >
{showProfilepic()}
<Modal show={profileModal} onHide={profileClose} animation={false}>
        <Modal.Header closeButton>
          <Modal.Title>Select profile picture</Modal.Title>
        </Modal.Header>

        <Modal.Body>  
    <div style={{height:"350px",width:"500px"}}> 
    <div {...getRootProps()}>
      <input {...getInputProps()} />
      {
        !isDragActive ?
          (
            <div 
            style={{
              border: 'dashed lightgrey 4px',
              backgroundColor: 'rgba(255,255,255,.8)',
              position: 'absolute',
              alignContent:'center',
              alignItems:"center",
              top: "5%",
              bottom: 0,
              left: "5%", 
              right: 0,
              zIndex: 9999,
              height:"50%",
              width:"90%",
            }}
          >
            <div 
              style={{
                position: 'absolute',
                top: '25%',
                right: 0,
                left: "5%",
                textAlign: 'center',
                color: 'grey',
                fontSize: 36,
                height:"80%",
                width:"90%",
              }}
            >
              <div style={{opacity:"0.5"}}>
                <p><IoMdPhotos/></p>
                <h1 style={{fontSize:"20px"}}> Drag and drop your photo here!</h1>
              </div>
            </div>
          </div>
            
          ):
          (
            <div 
            style={{
              border: 'dashed grey 4px',
              backgroundColor: 'rgba(255,255,255,.8)',
              position: 'absolute',
              alignContent:'center',
              alignItems:"center",
              top: "5%",
              bottom: 0,
              left: "5%", 
              right: 0,
              zIndex: 9999,
              height:"50%",
              width:"90%",
            }}
          >
            <div 
              style={{
                position: 'absolute',
                top: '25%',
                right: 0,
                left: 0,
                textAlign: 'center',
                color: 'grey',
                fontSize: 36
              }}
            >
              <div>
              <p><IoMdPhotos/></p>
                <h1 style={{fontSize:"20px"}}> Drag and drop your photo here!</h1>
              </div>
            </div>
          </div>
          )
      }
    </div>        
    </div> 
    
    {showProfilePic()}
        </Modal.Body>
        <Modal.Footer >
        {removalButtonMethod()}
          {/* <Button variant="secondary" onClick={profileClose}>
            Close
          </Button> */}
          {isLoadingMethod()}
        </Modal.Footer>
</Modal>
</li>
<li className="nav-links-join" >
  <Button variant="light" size="sm" className="join-button" onClick={props.signOutMethod}> <p className="join-button-text"> <center> Sign Out </center> </p></Button></li>
      </ul>
      </Fragment>
    </nav>
  )
}
  export default NavigationBar;