import DashboardMenu from "../../components/Shared/DashboardMenu";
import "./Dashboard.css";
import { Link } from "react-router-dom";

const Dashboard = () => {
  return (
    <div className="bg-slate-200">
      <div className="flex mx-auto justify-between">
        <div className="admin-menu">
          <DashboardMenu></DashboardMenu>
        </div>
      </div>

      <div className="continer mx-auto flex justify-center gap-4">
        <div className="card w-96 bg-base-100 shadow-xl">
          <div className="card-body">
            <h2 className="card-title">Homepage Setting</h2>
            <p>If a dog chews shoes whose shoes does he choose?</p>
            <div className="card-actions justify-end">
              <Link to='/admin/homepage-setting'  className="btn btn-primary">Setting Now</Link>
            </div>
          </div>
        </div>
        <div className="card w-96 bg-base-100 shadow-xl">
          <div className="card-body">
            <h2 className="card-title">Payment Setting</h2>
            <p>If a dog chews shoes whose shoes does he choose?</p>
            <div className="card-actions justify-end">
              <Link to='/admin/payment-setting' className="btn btn-primary">Setup Now</Link>
            </div>
          </div>
        </div>
        <div className="card w-96 bg-base-100 shadow-xl">
          <div className="card-body">
            <h2 className="card-title">Footer Setting</h2>
            <p>Here you can setup Footer Setting</p>
            <div className="card-actions justify-end">
              <Link to='/admin/footer-edit/' className="btn btn-primary">Setting</Link>
            </div>
          </div>
        </div>
      </div>
      
    </div>
  );
};

export default Dashboard;
