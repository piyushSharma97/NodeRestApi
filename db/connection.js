const mongoose = require('mongoose');
var localDB=process.env.LOCAL_DB
var globalDB =process.env.GLOBAL_DB

mongoose.connect(globalDB, {  useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
    useCreateIndex: true});

module.exports =mongoose