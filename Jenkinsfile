pipeline {
    agent any

    environment {
        NETLIFY_SITE_ID = 'cf7599ab-813b-4f6e-a6ce-0646311a5433'
    }

    stages {
        stage('Hello') {
            steps {
                echo 'Hello World!!! Jenkins setting up'
            }
        }
        stage('Build') {
            agent {
                docker {
                    image 'node:18-alpine'
                    reuseNode true
                }
            }
            steps {
                sh '''
                    node --version
                    npm --version
                    pwd
                    npm ci
                    npm run build
                '''
            }
        }
        stage('Test') {
            agent {
                docker {
                    image 'node:18-alpine'
                    reuseNode true
                }
            }
            steps {
                sh '''
                    npm run test
                '''
            }
        }
        stage('Deploy') {
            agent {
                docker {
                    image 'node:18-alpine'
                    reuseNode true
                }
            }
            steps {
                sh '''
                    npm install netlify-cli
                    node_modules/.bin/netlify
                '''
            }
        }
    }

    post {
        always {
            junit 'test-results/'
        }
    }
}
