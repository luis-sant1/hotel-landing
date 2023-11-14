import * as React from "react";

function IconBxsQuoteAltLeft(props) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      height="3em"
      width="3em"
      {...props}
    
    >
      <path d="M6.5 10c-.223 0-.437.034-.65.065.069-.232.14-.468.254-.68.114-.308.292-.575.469-.844.148-.291.409-.488.601-.737.201-.242.475-.403.692-.604.213-.21.492-.315.714-.463.232-.133.434-.28.65-.35l.539-.222.474-.197-.485-1.938-.597.144c-.191.048-.424.104-.689.171-.271.05-.56.187-.882.312-.318.142-.686.238-1.028.466-.344.218-.741.4-1.091.692-.339.301-.748.562-1.05.945-.33.358-.656.734-.909 1.162-.293.408-.492.856-.702 1.299-.19.443-.343.896-.468 1.336-.237.882-.343 1.72-.384 2.437-.034.718-.014 1.315.028 1.747.015.204.043.402.063.539l.025.168.026-.006A4.5 4.5 0 106.5 10zm11 0c-.223 0-.437.034-.65.065.069-.232.14-.468.254-.68.114-.308.292-.575.469-.844.148-.291.409-.488.601-.737.201-.242.475-.403.692-.604.213-.21.492-.315.714-.463.232-.133.434-.28.65-.35l.539-.222.474-.197-.485-1.938-.597.144c-.191.048-.424.104-.689.171-.271.05-.56.187-.882.312-.317.143-.686.238-1.028.467-.344.218-.741.4-1.091.692-.339.301-.748.562-1.05.944-.33.358-.656.734-.909 1.162-.293.408-.492.856-.702 1.299-.19.443-.343.896-.468 1.336-.237.882-.343 1.72-.384 2.437-.034.718-.014 1.315.028 1.747.015.204.043.402.063.539l.025.168.026-.006A4.5 4.5 0 1017.5 10z" />
    </svg>
  );
}
export default function Reviews (){
    return(
        <div className="m-4">
            
            
            <div className="bg-brown">
            <IconBxsQuoteAltLeft className="text-white"/>
                <p className="text-white mb-10 pb-5 font-light pr-5 pl-5 pt-0'">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Impedit, consectetur nobis. Enim qui cumque dolores amet fugiat voluptatibus perspiciatis nostrum maiores magnam provident saepe consectetur quasi eaque alias, doloribus accusamus?</p>
                <h2 className="text-2xl p-2"><span
                className="font-thin font-lg p-5 text-white">@Username</span></h2>
            </div>

            <style>
                @import url('https://fonts.googleapis.com/css2?family=Oswald:wght@200;300;400;500;600;700&display=swap');
            </style>
        </div>
    )
} 