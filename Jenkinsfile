node {
    agent any;
    stage("checkout scm"){
        checkout scm;
    }
    stage("test"){
        echo "Hello"
    }
   // stage("build docker image"){
   //    sh "docker build -t landing:develop . ";
   // }
   // stage("deploy the image and container"){
   // sh "docker stop landing || true && docker rm landing || true";
   // sh "docker run -d --name=landing -p 4999:3000 landing:develop";
   // }
}
