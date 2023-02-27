function createData()
{
     //We will initially initialize the size which is basically no. of nodes in the graph
     const sizee=Math.floor(Math.random()* 8)+2;  //Using Random value from 0 to 7 so range of size is 2 to 9

     //Adding people to the nodes array
     let nodes=[];
     for(let i=1;i<=sizee;i++)
     {
        nodes.push({id:i,label:"Person "+i})
     }
     nodes=new vis.DataSet(nodes);


     //Dynamically creating edges with random amount to be paid from one to another friend
     const edges=[];
     for(let i=1;i<=sizee;i++)
     {// Here we are iterating over all the people who are after i or that person suppose that person is 1 then other person 2 3 4 5 upto sizeee
        for(let j=i+1;j<=sizee;j++)
        {
            //Modifies the amount of edges added in the graph
            if(Math.random()>0.5) // if edge is cretaed between any two nodes then no. of edges will be n*(n-1)/2 Since here we r using probability so here it will be around n*(n-1)/4
            //So that look of graph is better and it wont be dense
            {
                //Controls the direction of cash flow on the edge
                if(Math.random()>0.5) // we want to add an edge from i to j oor j to i so to create that randomness we are using random variable
                {
                    // here we are adding edge from i to j 
                    edges.push({from:i,to:j,label: String(Math.floor(Math.random()*100)+1)});
// here the value ranges from 1 to 100
                }
                else{
                    edges.push({from:j,to:i ,label: String(Math.floor(Math.random()*100)+1)}); 
                }
            }
        }
     }
     const data ={   // creating a data variable wherein setting nodes and the edges
        nodes:nodes,
        edges: edges
     };
     return data;

}