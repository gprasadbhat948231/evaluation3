import React from 'react'
import Navbar from './Navbar';
const Projects = (props) => {
    const {prodata}=props;
    const {items}=prodata;
    console.log(items);
    return (
    <div>
        <div style={{backgroundColor:'#E5CCFF',width:'100%',height:'120vh',textAlign:'center'}}>
        <Navbar/>
          <h1>Projects</h1>
            <div style={{display:'grid',gridTemplateColumns:'repeat(2,1fr)',width:'800px',margin:'auto'}}>
            {
              items.map((item) => (
                <div style={{border:'1px solid gray'}} key={item.name}>
                  <div>
                    <h3>{item.name}</h3>
                  </div>
                  <div style={{display:'flex'}}>
                    <div>
                      <h3>Stars:{item.stargazers_count}</h3>
                      <h3>Forks:{item.forks}</h3>
                    </div>
                    <h3>
                      Language:{item.language}
                    </h3>
                  </div>
                </div>
              ))
            }
          </div>
        </div>
    </div>
  )
}
export async function getServerSideProps() {
    let projects = await fetch('https://api.github.com/search/repositories?q=user:gprasadbhat948231+fork:true&sort=updated&per_page=10&type=Repositories');
    let pdata = await projects.json();
    return {
      props: {
        prodata: pdata
      }
    }
  }
export default Projects