pipeline{
    agent any
      stages{
        stage('checkout'){
          steps{  
            checkout scm;
           }
        }

        stage("build docker image"){
            steps{
                sh "docker build -t landing:develop . ";
            }
        }

        stage("deploy the image and container"){
            steps{
                sh "docker stop landing || true && docker rm landing || true";
                sh "docker run -d --name=landing -p 4999:3000 landing:develop"; 
            }
        }
        

    }
}
