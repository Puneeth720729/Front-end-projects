const dragMe=document.getElementById("DragMe");
const dropZone=document.getElementById("dropZone");
dragMe.addEventListener("dragstart",(e)=>{
    e.dataTransfer.setData("text/plain","DragMe");
});
dropZone.addEventListener("dragover",(e)=>{
    e.preventDefault();
});
dropZone.addEventListener("drop",(e)=>{
    e.preventDefault();
    const draggedId=e.dataTransfer.getData("text");
    const draggedElement=document.getElementById(draggedId);
    dropZone.appendChild(draggedElement);
});