export const randomDelay=()=>new Promise((resolve)=>{ 
    const maxTime:number=350
    const minTime:number=100
    const delay:number=Math.floor(Math.random()*(maxTime-minTime+1)+minTime)
    setTimeout(resolve,delay)

})