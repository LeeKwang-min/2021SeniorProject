const express = require('express')
const path = require('path');
const router = express.Router();

module.exports = (pool) => {
    // 소설 리스트 출력
    // API: '/novel/list/[num]'
    router.get('/list/:id', (req, res, next) => {
        const list_id = path.parse(req.params.id).base * 20;
        const sql = 'SELECT id,title,imgurl FROM novel_data LIMIT ?,20';
        pool.query(sql, [list_id], (err, results) => {
            if (err) {
                console.log(err);
                return next(err);
            }
            res.send(results);
        });
    });

    // 작품 상세정보 출력
    // API : '/novel/detail/[num]'
    router.get('/noveldata/:novel_id', (req, res, next) => {
        //패러미터 파싱
        const novel_id = path.parse(req.params.novel_id).base;
        //메인 쿼리
        //id, title, imgurl, genre, description, author_id, name
        const data_sql = 'SELECT d.id, d.title, d.imgurl,\
                d.genre, d.description, d.author_id, au.name \
                FROM novel_data AS d JOIN author AS au \
                ON d.author_id = au.id WHERE d.id=?;';
        const link_sql = 'SELECT url FROM novel_link WHERE nid = ?';
        pool.query(data_sql + link_sql, [novel_id, novel_id],
            (err, results) => {
                if (err) {
                    console.log(err);
                    return next(err);
                }
                const result_data = { ...results[0][0], urls: results[1] };
                res.send(result_data);
            });
    });

    //평점 준 작품 소설 리스트 출력

    //평점 준 작가 기반 소설 리스트 출력

    

    //조회수 기반 소설 리스트 출력

    //추천 알고리즘 기반 소설 리스트 출력


    return router;
}