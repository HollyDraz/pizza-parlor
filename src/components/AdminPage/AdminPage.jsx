// Admin page for brianna (feel better <3)
/**
 * #### ADMIN PAGE
- [ ] Each PATH /admin link and router
- [ ] Display NAME, TIME OF ORDER, TYPE, TOTAL (in a Table)
- [ ] 'GET' request for data
 */


const AdminPage = () => {
    return (
        <>
        <div>
            <h1>Hello, Admin!</h1>
        </div>
        <div>
           <table>
            <tr>
                <th>Name</th>
                <th>Time Order Placed</th>
                <th>Type</th>
                <th>Cost</th>

            </tr>
           </table> 
        </div>
        </>
    )
}


export default AdminPage;