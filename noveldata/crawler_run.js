// 모듈 import
const BASEDIR = __dirname;
const joara = require(BASEDIR+'/crawler/all/joara_crawler.js');
const naver = require(BASEDIR+'/crawler/all/naver_series_crawler.js');
const kakao = require(BASEDIR+'/crawler/all/kakao_page_crawler.js');
const ridibooks = require(BASEDIR+'/crawler/all/ridibooks_crawler.js');
const mergeCSV = require(BASEDIR+'/crawler/all/mergeCSV.js');
const fs = require('fs');

// csv 폴더 읽기, 없으면 csv 폴더 생성
fs.readdir(BASEDIR+'/csv',(err)=>{
    if(err){
        console.error('csv 폴더가 없으므로, 우선 폴더를 생성합니다.');
        fs.mkdirSync(BASEDIR+'/csv');
    }
});
// 크롤링 실행
const run = async() =>{
    try{
        console.log('전체 기간 소설 크롤링을 진행합니다.');
        await Promise.all([joara.run(),naver.run(),kakao.run(),ridibooks.run()]);
        mergeCSV.run();
    } catch(error){
        console.log(error);
    }
}
run();
