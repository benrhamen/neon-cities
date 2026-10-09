import React,{useState,useEffect} from 'react';
export function FileCard({children}:any){return <main className="overview">{children}</main>}
export function Header({title,fact,intro}:any){return <header><h1>{title}</h1><p className="meta">{fact}</p><p>{intro}</p></header>}
export function Group({label,children}:any){return <section><h2>{label}</h2>{children}</section>}
export function Closing({children}:any){return <footer>{children}</footer>}
export function Caption({children}:any){return <p className="caption">{children}</p>}
export function TextLink({href,children}:any){return <a href={href} target="_blank" rel="noopener noreferrer">{children}</a>}
export function Link({to,children,...props}:any){return <a href={'#'+to} {...props}>{children}</a>}
export function Route(_:any){return null}
export function Routes({children}:any){const [path,setPath]=useState(location.hash.slice(1)||'/');useEffect(()=>{const change=()=>{setPath(location.hash.slice(1)||'/');window.scrollTo(0,0)};window.addEventListener('hashchange',change);return ()=>window.removeEventListener('hashchange',change)},[]);return React.Children.toArray(children).find((x:any)=>x.props.path===path)?.props.element||React.Children.toArray(children)[0]?.props.element}
export function useLocalState<T>(key:string,initial:T):any{const storageKey='neon-cities.'+key;const [message,setMessage]=useState('Scores saved only in this browser.');const [value,setValue]=useState<T>(()=>{try{return JSON.parse(localStorage.getItem(storageKey)||'null')??initial}catch{return initial}});const save=(next:T)=>{setValue(next);try{localStorage.setItem(storageKey,JSON.stringify(next))}catch{setMessage('Scores could not be saved. They last for this visit only.')}};return [value,save,{ready:true,message}]}
