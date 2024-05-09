app.get('/list', function(req, res){
    mydb.collection('post').find().toArray(function(err,res){
        console.log(result);
    })

});