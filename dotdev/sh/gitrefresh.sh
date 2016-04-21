### <beg-file_info>
### main:
###   - date: created="Wed Apr 20 17:46:48 2016"
###     last: lastmod="Wed Apr 20 17:46:48 2016"
###     tags: tags 
###     dreftymacid: "fair_club_validly"
###     filetype: "yaml"
###     seealso: |
###         *
###     desc: |
###         run this script to refresh git on both the local machine and the VM devbox
### <end-file_info>

echo "### ******************** "
echo "## running $0"
echo ""
pwd;

echo ""
echo "### ******************** "
echo "##  git.refresh local machine"
echo ""
(mkdir -p ~/gitmsg); (touch ~/gitmsg/commit.msg.txt); (git fetch);  (git pull origin master);
(git add .); (git commit -a --file ~/gitmsg/commit.msg.txt); (git push origin master); (git status);

echo ""
echo "### ******************** "
echo "##  git.refresh devbox VM"
echo ""
ssh root@tmplamp 'cd /var/www/html/angular1x.barebones; (git fetch); (git pull origin master); (git push origin master);'
clear;


