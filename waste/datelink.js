'use strict';

// 确保hexo对象存在
var hexo = hexo || {};

// 注册一个before_post_render过滤器
hexo.extend.filter.register('before_post_render', function(data) {
    // 检查文章布局是否为'post'
    if (data.layout === 'post') {
        // 检查data.date是否存在且是否为有效的日期对象
        if (data.date && typeof data.date.format === 'function') {
            // 使用Moment.js格式化日期
            data.datelink = data.date.format('YYYYMMDDHHmmss');
        } else {
            // 如果data.date不是有效的日期对象，输出错误日志
            console.error('Invalid date object for post:', data);
            console.error('data.date日期对象不合法：', data);
        }
    }
    // 返回处理后的数据
    return data;
}, 15);