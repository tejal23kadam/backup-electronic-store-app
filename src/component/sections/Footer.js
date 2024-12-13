import React from 'react'

function Footer() {
    return (
        <footer class="footer section section-sm">
            {/* <!-- Container Start --> */}
            <div class="container">
                <div class="row">
                    <div class="col-lg-3 col-md-7 offset-md-1 offset-lg-0 mb-4 mb-lg-0">
                        {/* <!-- About --> */}
                        <div class="block about">
                            {/* <!-- footer logo --> */}
                            {/* <img src="images/logo-footer.png" alt="logo" /> */}
                            {/* <!-- description --> */}
                            <h4 class="alt-color">Stay in touch with us, get product updates, offers, discounts directly to your inbox</h4>
                            <input type="text" class="form-control my-2 my-lg-1" placeholder="Enter Email Id " />
                        </div>
                    </div>
                    {/* <!-- Link list --> */}
                    <div class="col-lg-2 offset-lg-1 col-md-3 col-6 mb-4 mb-lg-0">
                        <div class="block">
                            <h4>Pages</h4>                           
                                <div><a href="dashboard-my-ads.html">About US</a></div>
                                <div><a href="dashboard-favourite-ads.html">Contact</a></div>
                                <div><a href="dashboard-archived-ads.html">Help Center</a></div>                               
                           
                        </div>
                    </div>
                
                </div>
            </div>
            {/* <!-- Container End --> */}
        </footer>
    )
}

export default Footer