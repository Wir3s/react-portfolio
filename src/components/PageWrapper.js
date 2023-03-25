export function PageWrapper(props){
console.log(props)
return <div style={{display:'flex', flexDirection:'column', justifyContent:'center', alignItems:'center', padding: '40px', backgroundColor:'black', flex: "1"}}>{props.children}</div>
}