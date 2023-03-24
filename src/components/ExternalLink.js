export function ExternalLink (props){
    console.log(props)
    const {link,content} = props
    return(
        <a target="_blank" rel="noreferrer" href={link}>{content}</a>
    )
}