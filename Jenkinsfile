pipeline{
    agent any
    stages {
        stage('Build'){
            steps {
                bat 'npm install'
            }
        }
        stage('env'){
            steps {
                bat 'type nul > .env'
                bat 'echo REACT_APP_SECRET_CODE=medApp> .env'
            }
        }
        stage('run'){
            steps {
                bat 'npm run build'
            }
        }
        stage('Docker Build and Deploy'){
            steps {
                bat 'docker pull httpd'
                bat 'docker build -t medapp .'
                bat 'docker run -dit --name my-running-app -p 8081:80 medapp'
            }
        }
    }
}
