import axios from 'axios';
import buildClient from '../api/build-client';

// export default ()=>{
//     return  <h1> Landing Page</h1>
// };


const LandingPage =({currentUser}) => {
    // console.log('LANDING PAGE! =' ,color );
    // return   <h1>You are signed in</h1>

    console.log(currentUser );

    return currentUser ? (
        <h1>You are signed in</h1>
    ) : (
        <h1>You are NOT signed in</h1>
    );
}

LandingPage.getInitialProps = async context => {
    // console.log('LANDING PAGE!');
    // return {color:'red'}

    // const response = await axios.get('/api/users/currentuser');
    // console.log(response)
    // return response.data
   
    //-------------------------------------
    // console.log(req.headers)

    // if (typeof window === 'undefined') {
    //     // We are on the server
    //     const {data} = await axios.get('http://ingress-nginx-controller.ingress-nginx.svc.cluster.local/api/users/currentuser',{
    //         // headers:{
    //         //     Host:'ticketing.dev'
    //         // }
    //         headers:req.headers
    //     });
    //     return data
    // }
    // else
    // {
    //     // We must be on the browser
    //     const {data} = await axios.get('/api/users/currentuser');
    //     return data
    // }
    //-------------------------------------
    // console.log(context)
    console.log('LANDING PAGE!');
    const client = buildClient(context);
    const { data } = await client.get('/api/users/currentuser');
  
    return data;

}

export default LandingPage;