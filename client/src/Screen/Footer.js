import './Footer.css'

function Footer(){
   return <>
   
      
      <div class="footer" >
            <div class="container">
               <div class="row">
                  <div class=" col-md-4">
                     <div class="col-6" style={{color:"lightyellow",fontWeight: 'bold'}}><h3>Contact US</h3></div>
                     <ul class="conta navbar-nav">
                        <li><i class="fa fa-map-marker" aria-hidden="true" style={{color:"lightyellow",fontWeight: 'bold'}}></i> Address</li><br/>
                        <li><i class="fa fa-mobile" aria-hidden="true"></i> +01 1234569540</li><br/>
                        <li> <i class="fa fa-envelope" aria-hidden="true"></i><a href="#"> 22010101188@darshan.ac.in</a></li><br/>
                     </ul>
                  </div>
                  <div class="col-md-4">
                  <div class="col-6" style={{color:"lightyellow",fontWeight: 'bold'}}><h3>Menu Link</h3></div>
                     <ul class="link_menu navbar-nav">
                        <li class="active"><a href="/">Home</a></li>
                        <li><a href="/about">About</a></li>
                        <li><a href="/room">Our Room</a></li>
                        {/* <li><a href="/gallery">Gallery</a></li> */}
                        <li><a href="/about">Blog</a></li>
                        <li><a href="/contact">Contact Us</a></li>
                     </ul>
                  </div>
                  <div class="col-md-4">
                  <div class="col-6" style={{color:"lightyellow",fontWeight: 'bold'}}><h3>Follow US</h3></div>
                     <div class="row">
                        <div class="col col-2"><a href="#" style={{color:"white"}}><i class="fa fa-facebook" aria-hidden="true"></i></a></div>
                        <div class="col col-2"><a href="#" style={{color:"white"}}><i class="fa fa-twitter" aria-hidden="true"></i></a></div>
                        <div class="col col-2"><a href="#" style={{color:"white"}}><i class="fa fa-linkedin" aria-hidden="true"></i></a></div>
                        <div class="col col-2"><a href="#" style={{color:"white"}}><i class="fa fa-youtube-play" aria-hidden="true"></i></a></div>
                     </div>
                  </div>
               </div>
            </div>
         <div class="row">
            <div class="copyright">
               <div class="container">
                  <div class="row">
                     <div class="col">
                        <p style={{color:"white",textAlign:"center"}}>
                           © 2024 All Rights Reserved. Design by RIDDHI PATEL
                           <br/><br/>
                        </p>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </div>
      
      
   
      
      
                                    
    </>
}
export {Footer}