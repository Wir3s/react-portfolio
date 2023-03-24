export function PageWrapper(props){
console.log(props)
return <div style={{display:'flex', flexDirection:'column', justifyContent:'center', alignItems:'center', padding: '40px', backgroundColor:'yellow', flex: "1 1 auto"}}>{props.children}</div>
}