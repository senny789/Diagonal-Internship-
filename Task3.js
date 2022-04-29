/* 
n: An integer. The floor of John(0-based).
m: An integer. The floor of the elevator(0-based).
speeds: An array of integer. It contains four integer [a,b,c,d]
a: The seconds required when the elevator rises or falls 1 floor
 b: The seconds required when the elevator open the door
c: The seconds required when the elevator close the door
d: The seconds required when John walks to n-1 or n+1 floor
 */

const fastest=(n,m,a,b,c,d)=>{
    let walkTime=n*d;
    let floorDiff;
    let elevatorrTime;
    if(m>n){
        floorDiff=m-n;
    }
    else{
        floorDiff=n-m;
    }
    elevatorrTime=(floorDiff*a)+(2*b)+(n*a)+c;
    if(elevatorrTime<walkTime)
    {
        console.log(`elevator takes shortest amount  of ${elevatorrTime}`)
        return "Shortest path is elevator"
    }
    else{
        console.log(`walking takes shortest amount  of ${walkTime}`);
        return "Shortest path is by taking the stairs"
    }
   
}