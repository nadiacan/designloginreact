import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="background-img">
      <div className="container">
        <div className="block-content">
          <div className="bg-content">
            <div className='text-center'>
              <img src={logo} className="img-fluid"  alt="logo" />
            </div>
            <form className='form-login'>
              <div className="form-group">
                <label className='d-none'>Username</label>
                <input type="text" className="form-control" placeholder="Username"></input>
              </div>
              <div className="form-group">
                <label className='d-none'>Password</label>
                <input type="text" className="form-control" placeholder="Password"></input>
              </div>
              <div className='row mb-5'>
                <div className='col-6'>
                  <div className="form-check">
                    <input className="form-check-input" type="checkbox" value=""></input>
                    <label className="form-check-label text-grey-sm">
                      Keep me sign in
                    </label>
                  </div>
                </div>
                <div className='col-6 text-right text-grey-sm'>
                    Forgot Password
                </div>
              </div>
              <div className='text-center mb-4'>
                <button type="submit" className="btn btn-primary mb-2">LOG IN</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
