
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { addToCategoryFilter } from '../sliceComponent/CategoryFilterSlice';


function NavBar() {

    const dispatch = useDispatch();
    const cart = useSelector((state) => state.cart);

    return (
        <div class="container">
            <div class="row">
                <div class="col-md-12">
                    <nav class="navbar navbar-expand-lg navbar-light navigation">
                        <a class="navbar-brand" href="index.html">

                            <img src={require('../../images/logo.png')} alt="no img" />
                        </a>
                        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent"
                            aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span class="navbar-toggler-icon"></span>
                        </button>
                        <div class="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul class="navbar-nav ms-auto main-nav ">
                              
                                <li className="nav-item" onClick={() => { dispatch(addToCategoryFilter('audio')) }}><Link to="/audio">audio</Link></li>
                                <li className="nav-item" onClick={() => { dispatch(addToCategoryFilter('appliances')) }} ><Link to="/appliances">appliances</Link></li>
                                <li className="nav-item" onClick={() => { dispatch(addToCategoryFilter('gaming')) }}><Link to="/gaming">gaming</Link></li>
                                <li className="nav-item" onClick={() => { dispatch(addToCategoryFilter('laptop')) }}><Link to="/laptop">laptop</Link></li>
                                <li className="nav-item" onClick={() => { dispatch(addToCategoryFilter('mobile')) }}><Link to="/mobile">mobile</Link></li>
                                <li className="nav-item" onClick={() => { dispatch(addToCategoryFilter('tv')) }}><Link to="/tv">tv</Link></li>
                            </ul>
                            <ul class="navbar-nav ms-auto mt-10">
							<li class="nav-item">
								<a class="nav-link login-button" href="login.html">Login</a>
							</li>
							<li class="nav-item">
								<a class="nav-link text-white add-button" href="ad-listing.html"><i class="fa fa-plus-circle"></i> Add Listing</a>
							</li>
						</ul>
                        </div>
                    </nav>
                </div>
            </div>
        </div>
    )
}
export default NavBar 