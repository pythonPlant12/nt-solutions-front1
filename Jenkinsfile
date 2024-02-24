pipeline {
    agent any

    stages {
        // Here I assign different stages for Jenkins 
        stage("build") {
            steps {
                // In my case as it is javascript application i will run here commands like:
                // sh 'npm install' 
                // sh 'npm build'
                echo 'building the application...'
            }
        }
        stage("test") {
            steps {
                echo 'testing the application...'
                
            }
        }
        stage("deploy") {
            steps {
                echo 'deploying the application...'
                
            }
        }
        // post is to execute something after all builds are done
        post {
            always { // always means that it will be executed always, no matter if build failed or another issue happened
                // For example here I can send an email if the build is done or failed...
            }
            success {
                // Something to do on success build
            }
            failure {
                // Something to do on failure build
            }
        }
    }
}