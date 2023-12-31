import React, { useState } from 'react'


export default function About() {
    const [mystyle,newStyle]=useState({
        backgroundColor:"white",
        color:"black",
        border:"1px solid black"

    });
    const [btnText,btnNewText]=useState("Enable Dark Mode");
    const togglemode=()=>{
        if(mystyle.color==="#042743")
        {
            newStyle({
                backgroundColor:"#042743",
                 color:"white" ,
            });
            btnNewText("Enable Light Mode");
        }
        else{
            newStyle({
                backgroundColor:"white",
                 color:"black" ,
            });
            btnNewText("Enable Dark Mode");

        }
    }
  return (
    <>

    <div className='container' style={mystyle}>
        <h1 className='container'>About Us</h1>
      <div className="accordion" id="accordionExample" style={mystyle}>
  <div className="card">
    <div className="card-header" id="headingOne" style={mystyle}>
      <h2 className="mb-0">
        <button className="btn btn-link btn-block text-left" type="button" style={mystyle} data-toggle="collapse" data-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
          Collapsible Group Item #1
        </button>
      </h2>
    </div>

    <div id="collapseOne"  className="collapse show" aria-labelledby="headingOne" data-parent="#accordionExample" style={mystyle}>
      <div className="card-body">
        Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.
      </div>
    </div>
  </div>
  <div className="card">
    <div className="card-header" id="headingTwo"  style={mystyle}>
      <h2 className="mb-0">
        <button style={mystyle} className="btn btn-link btn-block text-left collapsed" type="button" data-toggle="collapse" data-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
          Collapsible Group Item #2
        </button>
      </h2>
    </div>
    <div id="collapseTwo"  className="collapse" aria-labelledby="headingTwo" data-parent="#accordionExample" style={mystyle}>
      <div className="card-body">
        Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.
      </div>
    </div>
  </div>
  <div className="card">
    <div className="card-header" id="headingThree"  style={mystyle}>
      <h2 className="mb-0">
        <button style={mystyle} className="btn btn-link btn-block text-left collapsed" type="button" data-toggle="collapse" data-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
          Collapsible Group Item #3
        </button>
      </h2>
    </div>
    <div id="collapseThree" style={mystyle} className="collapse" aria-labelledby="headingThree" data-parent="#accordionExample">
      <div className="card-body">
        Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.
      </div>
    </div>
  </div>
</div>
<button type="button" style={mystyle} onClick={togglemode} className="btn  my-4">{btnText}</button>
    </div>

    </>
  )
}
