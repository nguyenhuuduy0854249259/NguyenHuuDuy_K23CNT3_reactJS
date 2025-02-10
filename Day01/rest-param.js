function fn_rest_param(a,b,c,d,...other){
    console.log("a=",a);
    console.log("b=",b);
    console.log("c=",c);
    console.log("d=",d);
    console.log("...other",other);
}


fn_rest_param(1,2);
fn_rest_param(1,2,3,5);
fn_rest_param(1,2,3,4,5,11,111,1111);
