var globalz=[];
var urlz=[];
var descz=[];
var datez=[];

function click(){
// var a=$('.target').text;
var url=document.getElementById("mySelect").value;
//var a=$("#mySelect").value;
// alert(a);
	//alert('Go!');
	clear();
	$.ajax({
	  type: "GET",
	  url: 'http://ajax.googleapis.com/ajax/services/feed/load?v=1.0&num=1000&callback=?&q='+encodeURIComponent(url),
	  dataType: "json",
	  success: function(data){
	  	//alert(JSON.stringify(data.responseData));
	  	recursion(data.responseData);
		// alert(globalz);

		//var ParentNode = document.getElementById("text");
		// var ChildNode=document.getElementById("realtext")
		// ParentNode.removeChild(ChildNode);
		// var newChild=document.createElement("div");
		// newChild.id="realtext";
		// ParentNode.appendChild(newChild);


		// $('#realtext').text(globalz.slice(0,5));


    for (let i=0; i<globalz.length; i++) {
      organizer.addArticle(globalz[i], datez[i], descz[i], urlz[i]);
    }

	// $('#text').text(globalz.slice(0,5));


	// $('#text2').text(urlz.slice(0,5));

	// $('#text3').text(descz.slice(0,5));

	// $('#text4').text(datez.slice(0,5));



	// for(i=0;i<5;i++){


	// 	var ParentNode = document.getElementById("text");
	// 	var ChildNode=document.getElementById("realtext")
	// 	ParentNode.removeChild(ChildNode);
	// 	var newChild=document.createElement("div");
	// 	newChild.id="realtext";
	// 	ParentNode.appendChild(newChild);

	// }

	  },
	  error: function(xhr, status) {
            alert(status);
       }
	});


}


function recursion(data){

	var parent=data;
	//alert(JSON.stringify(parent));
	for(var i in parent){
		// if(parent.title!=null){
		// 	var temp =JSON.stringify(parent.title);
		// 	if(!(globalz.includes(temp))){
		// 		globalz.push(JSON.stringify(parent.title));
		// 	}

		// }


		// if(parent.link!=null){
		// 	var temp =JSON.stringify(parent.link);
		// 	if(!(urlz.includes(temp))){
		// 		urlz.push(JSON.stringify(parent.link));
		// 	}

		// }
		if(parent.title!=null && parent.link!=null && parent.link!='' && parent.content!='' && parent.content!=null){
			//alert(JSON.stringify(parent.description));
			var temp =JSON.stringify(parent.title);
			if(!(globalz.includes(temp))){
				globalz.push(JSON.stringify(parent.title));
				urlz.push(JSON.stringify(parent.link));
				descz.push(JSON.stringify(parent.content));
				datez.push(JSON.stringify(parent.publishedDate));
			}

		}


		// if(parent.link!=null){
		// 	var temp =JSON.stringify(parent.link);
		// 	if(!(urlz.includes(temp))){
		// 		urlz.push(JSON.stringify(parent.link));
		// 	}

		



		if(parent[i]!=null && parent[i].length!=1){
			recursion(parent[i]);
		}
		else{
			break;
		}
	}
}


function clear(){
	$('#text').text('');


	$('#text2').text('');

	$('#text3').text('');

	$('#text4').text('');

}

$(function() {
  $("#clickGo").click(function(){click()});
  $("#clickClear").click(function(){clear()});
});
