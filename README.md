# Group4-cicd-pipeline
<img src="https://img.shields.io/badge/Amazon AWS-FF9900?style=for-the-badge&logo=amazonaws&logoColor=white" />   <img src="https://img.shields.io/badge/GitHub_Actions-2088FF?style=for-the-badge&logo=github-actions&logoColor=white" />  <img src="https://img.shields.io/badge/Visual_Studio_Code-0078D4?style=for-the-badge&logo=visual%20studio%20code&logoColor=white" />     <img src="https://img.shields.io/badge/Ubuntu-E95420?style=for-the-badge&logo=ubuntu&logoColor=white"/>   ![alt text](https://github.com/ioctlsg/group4-cicd-pipeline/blob/main/serverless.png?raw=true)

<p align="center">
  <img width="250" src="">
</p>


Adding Synk <img src="https://img.shields.io/badge/Snyk-4C4A73?style=for-the-badge&logo=snyk&logoColor=white"/> to CICD pipeline

Creat an account with Synk.


https://app.snyk.io/account

```yml
name: Example workflow using Snyk
on: push
jobs:
  security:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@master
      - name: Run Snyk to check for vulnerabilities
        uses: snyk/actions/node@master
        env:
          SNYK_TOKEN: ${{ secrets.SNYK_TOKEN }}
        with:
          command: monitor
```


 <img src="https://img.shields.io/badge/Ask%20me-anything-1abc9c.svg"/>
