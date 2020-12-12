import UserList from '../../Components/UserList/UserList'
export default function AdminDashboard() {
    return(
        <div className="adminDashBoard" style={{margin: '25px'}}>
            <h4>Admin Dashboard</h4>
            <UserList/>
        </div>
    )
}