const express = require('express');
const router = express.Router();
const path = require('path');
const UploadImage = require( path.join(__dirname, '..','app/services/UploadImage') );

// Controllers
const usersController = require('../app/controllers/UsersController');
router.get('/users', usersController.list.bind(usersController));
router.get('/profiles', usersController.listProfiles.bind(usersController));
router.get('/users/accounts_running', usersController.listAccountsRunning.bind(usersController));
router.get('/users/allow_seeding', usersController.allowSeeding.bind(usersController));
router.get('/users/allow_grow', usersController.allowGrow.bind(usersController));
router.get('/user/:id/friends', usersController.friends.bind(usersController));
router.get('/user/:id/reactions', usersController.reactions.bind(usersController));
router.get('/user/:id/profiles', usersController.profilesInfo.bind(usersController));
router.get('/user/:id/check_new_profile', usersController.checkNewProfile.bind(usersController));
router.get('/user/:id', usersController.show.bind(usersController));
router.post('/users', usersController.create.bind(usersController));
router.put('/user/:id', usersController.update.bind(usersController));
router.put('/users/smart_proxies', usersController.smartProxies.bind(usersController));
router.delete('/user/:id', usersController.destroy.bind(usersController));

const proxiesController = require('../app/controllers/ProxiesController');
router.get('/proxies', proxiesController.list.bind(proxiesController));
router.get('/proxies/check_live_all', proxiesController.checkLiveAll.bind(proxiesController));
router.get('/proxy/:id', proxiesController.show.bind(proxiesController));
router.get('/proxy/:id/check_live', proxiesController.checkLive.bind(proxiesController));
router.post('/proxies', proxiesController.create.bind(proxiesController));
router.delete('/proxy/:id', proxiesController.destroy.bind(proxiesController));

const commentSettingsController = require('../app/controllers/CommentSettingsController');
router.get('/comment_settings', commentSettingsController.list.bind(commentSettingsController));
router.get('/comment_setting/read_images_folder', commentSettingsController.readImagesFolder.bind(commentSettingsController));
router.get('/comment_setting/:id', commentSettingsController.show.bind(commentSettingsController));
router.post('/comment_settings', commentSettingsController.create.bind(commentSettingsController));
router.post('/comment_settings/import_excel_file', commentSettingsController.importExcelFile.bind(commentSettingsController));
router.put('/comment_setting/:id', commentSettingsController.update.bind(commentSettingsController));
router.delete('/comment_setting/:id', commentSettingsController.destroy.bind(commentSettingsController));
router.delete('/comment_settings/destroy_all', commentSettingsController.destroyAll.bind(commentSettingsController));

const postSettingsController = require('../app/controllers/PostSettingsController');
router.get('/post_settings', postSettingsController.list.bind(postSettingsController));
router.get('/post_setting/:id', postSettingsController.show.bind(postSettingsController));
router.post('/post_settings', postSettingsController.create.bind(postSettingsController));
router.post('/post_settings/import_data_by_public_api', postSettingsController.importDataByPublicApi.bind(postSettingsController));
router.post('/post_settings/import_excel_file', postSettingsController.importExcelFile.bind(postSettingsController));
router.put('/post_setting/:id', postSettingsController.update.bind(postSettingsController));
router.delete('/post_setting/:id', postSettingsController.destroy.bind(postSettingsController));
router.delete('/post_settings/destroy_all', postSettingsController.destroyAll.bind(postSettingsController));

const attachmentsController = require('../app/controllers/AttachmentsController');
router.get('/attachments', attachmentsController.list.bind(attachmentsController));
router.get('/attachment/:id', attachmentsController.show.bind(attachmentsController));
router.post('/attachments', UploadImage.single('file'), attachmentsController.create.bind(attachmentsController));
router.put('/attachment/:id',  UploadImage.single('file'), attachmentsController.update.bind(attachmentsController));
router.delete('/attachment/:id', attachmentsController.destroy.bind(attachmentsController));

const commentsController = require('../app/controllers/CommentsController');
router.get('/comments', commentsController.list.bind(commentsController));

const postsController = require('../app/controllers/PostsController');
router.get('/posts', postsController.list.bind(postsController));
router.get('/posts/crawl_link', postsController.listPostsCrawled.bind(postsController));
router.get('/post/:id/check_new_post_crawled', postsController.checkNewPostCrawled.bind(postsController));

const browsersController = require('../app/controllers/BrowsersController');
router.get('/browser/:user_id/open', browsersController.open.bind(browsersController));
router.post('/browser/crawl_profile_friends', browsersController.CrawlProfileFriends.bind(browsersController));
router.post('/browser/:user_id/auto_comment_group', browsersController.autoCommentGroup.bind(browsersController));
router.post('/browser/:user_id/auto_comment_profile', browsersController.autoCommentProfile.bind(browsersController));
router.post('/browser/:user_id/auto_post_group', browsersController.autoPostGroup.bind(browsersController));
router.post('/browser/:user_id/auto_grow_user', browsersController.autoGrowUser.bind(browsersController));
router.put('/browser/:user_id/update_groups', browsersController.updateGroups.bind(browsersController));
router.put('/browser/:user_id/update_friends', browsersController.updateFriends.bind(browsersController));
router.post('/browser/crawl_post_reactions', browsersController.crawlPostReactions.bind(browsersController));

const appConfigsController = require('../app/controllers/AppConfigsController');
router.get('/app_configs', appConfigsController.list.bind(appConfigsController));
router.get('/app_config/current', appConfigsController.getCurrentAppConfig.bind(appConfigsController));
router.get('/app_config/get_grow_app_config', appConfigsController.getGrowAppConfig.bind(appConfigsController));
router.get('/app_config/:id', appConfigsController.show.bind(appConfigsController));
router.get('/app_configs/comment_group', appConfigsController.getListConfigCommentGroup.bind(appConfigsController));
router.get('/app_configs/post_group', appConfigsController.getListConfigPostGroup.bind(appConfigsController));
router.get('/app_configs/grow_user', appConfigsController.getListConfigGrowUser.bind(appConfigsController));
router.get('/app_configs/comment_profile', appConfigsController.getListConfigCommentProfile.bind(appConfigsController));
router.post('/app_configs', appConfigsController.create.bind(appConfigsController));
router.put('/app_config/update_grow_app_config', appConfigsController.updateGrowAppConfig.bind(appConfigsController));
router.put('/app_config/:id', appConfigsController.update.bind(appConfigsController));
router.delete('/app_config/:id', appConfigsController.destroy.bind(appConfigsController));
router.post('/app_config/:id/start_auto_spam', appConfigsController.startAutoSpam.bind(appConfigsController));
router.post('/app_config/:id/start_auto_profile_spam', appConfigsController.startAutoProfileSpam.bind(appConfigsController));
router.post('/app_config/:id/profile_spam_comment', appConfigsController.profileSpamComment.bind(appConfigsController));
router.post('/app_configs/start_auto_grow_user', appConfigsController.startAutoGrowUser.bind(appConfigsController));
router.post('/app_configs/stop_auto_spam', appConfigsController.stopAutoSpam.bind(appConfigsController));

module.exports = router;
