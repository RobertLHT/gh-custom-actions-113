const core = require('@actions/core');
const exec = require('@actions/exec');
const github = require('@actions/github');


function run() {
    // 1. Get some inputs values
    const bucket = core.getInput('bucket', { required: true });
    const bucketRegion = core.getInput('bucket-region', { required: true });
    const distFolder = core.getInput('dist-folder', {  required: true });

    // 2. upload files
    const s3Url = `s3://${bucket}`
    exec.exec('aws s3 sync ${distFolder} ${s3Url} --region ${bucketRegion}');

    core.notice("Hello from the deploy-s3-javascript action!");
}

run();