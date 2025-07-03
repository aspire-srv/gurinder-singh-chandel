import React from "react";

class UserClass extends React.Component{
    constructor(props){
        super(props)

        this.state = {
            count:0,
            userInfo:{}
        }
    }
        async componentDidMount(){
            const data = await fetch("https://api.github.com/users/aspire-srv");
            let jsonData = await data.json();
            console.log(jsonData)
           this.setState({
            userInfo:jsonData
           })
        }
   render(){

    const {name, avatar_url,location,updated_at ,login,blog} = this.state.userInfo
    // Format the updated_at date
    const formattedDate = updated_at
        ? new Date(updated_at).toLocaleString('en-US', {
            year: 'numeric',
            month: 'short',
            day: '2-digit',
            hour: '2-digit',
            minute: '2-digit'
        })
        : '';

    return (
        <div style={{
            background: 'linear-gradient(135deg, #f8fafc 0%, #e0e7ff 100%)',
            borderRadius: '16px',
            boxShadow: '0 8px 32px 0 rgba(31, 38, 135, 0.15)',
            padding: '0.5rem',
            margin:"1rem auto",
            width:"auto",
            maxWidth:"300px",
            fontFamily: 'Segoe UI, Arial, sans-serif'
        }}>
            <img width={"300px"} src={avatar_url} />
            <h3><span>Name : {name}</span>
            <span>({login})</span></h3>
             <h4>Location : {location}</h4>
            <h4> <a target="_blank" href={blog}>{blog} </a></h4>
             <h4>Last Updated : {formattedDate}</h4>
        </div>
    )
   }
   
}
export default UserClass;