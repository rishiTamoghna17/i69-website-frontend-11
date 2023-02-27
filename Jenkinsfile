

pipeline {
    agent any

    parameters {
        string defaultValue: 'main', description: 'enter the branch name to deploy', name: 'branch'
    }

    stages {
        stage("Backup code") {
        steps {
            script {
                // Save the current branch and commit hash
                def branch = params.branch
                def commit = sh(returnStdout: true, script: 'git rev-parse HEAD').trim()

                // Connect to the server and backup the code
                withCredentials([sshUserPrivateKey(credentialsId: 'mainserverkey', keyFileVariable: 'MAIN_SSH_KEY')]) {
                    sh """
                        ssh -o StrictHostKeyChecking=no -i $MAIN_SSH_KEY i69admin@188.34.154.165 -p 2289 '
                        cd fixes &&
                        rm -rf i69-website-frontend.tar.gz &&
                        tar -czvf i69-website-frontend.tar.gz i69-website-frontend
                        '
                    """
                }
            }
        }
    }
    
        stage("Deploy code to main server") {
            steps {
                script {
                    // Save the current branch and commit hash
                    def branch = params.branch
                    def commit = sh(returnStdout: true, script: 'git rev-parse HEAD').trim()

                    // Connect to the server and deploy the code
                    withCredentials([sshUserPrivateKey(credentialsId: 'mainserverkey', keyFileVariable: 'MAIN_SSH_KEY')]) {
                        sh """
                            ssh -o StrictHostKeyChecking=no -i $MAIN_SSH_KEY i69admin@188.34.154.165 -p 2289 '
                            cd fixes &&
                            cd i69-website-frontend &&
                            git fetch && git pull &&
                            git checkout ${params.branch} &&
                            docker build -t landing:develop . &&
                            docker stop landing || true && docker rm landing || true &&
                            docker run -d --name=landing -p 3002:3000 landing:develop
                            '
                        """
                    }
                }
            }
        }

        stage("Create rollback job") {
            steps {
                script {
                    // Save the current branch and commit hash
                    def branch = params.branch
                    def commit = sh(returnStdout: true, script: 'git rev-parse HEAD').trim()

                    // Create the rollback job
                    def jobName = "${env.JOB_NAME}-rollback"
                    def job = Jenkins.instance.getItemByFullName(jobName)

                    if (job == null) {
                        job = Jenkins.instance.createProject(FreeStyleProject, jobName)
                    }

                    // Add parameters to the rollback job
                    job.addProperty(new ParametersDefinitionProperty(
                        new StringParameterDefinition('branch', branch),
                        new StringParameterDefinition('commit', commit)
                    ))

                    // Add build steps to the rollback job
                    job.getBuildersList().clear()
                    
                    job.getBuildersList().add(new hudson.tasks.Shell("echo 'jenkins' | sudo -S ssh -o StrictHostKeyChecking=no -i /home/i69admin/.ssh/id_rsa i69admin@188.34.154.165 -p 2289 'cd fixes && cd i69-website-frontend && git checkout ${params.branch} && git reset --hard ${commit} && docker build -t landing:develop . && docker stop landing || true && docker rm landing || true && docker run -d --name=landing -p 3002:3000 landing:develop'"))
                
                }
            }
        }
    }

    post {
        failure {
            script {
                // Trigger the rollback job if the build fails
                def jobName = "${env.JOB_NAME}-rollback"
                def job = Jenkins.instance.getItemByFullName(jobName)

                if (job != null) {
                    job.scheduleBuild2(0)
                }
            }
        }
    }
}
