/*
 * @lc app=leetcode id=355 lang=javascript
 *
 * [355] Design Twitter
 *
 * https://leetcode.com/problems/design-twitter/description/
 *
 * algorithms
 * Medium (26.72%)
 * Total Accepted:    31.8K
 * Total Submissions: 118.6K
 * Testcase Example:  '["Twitter","postTweet","getNewsFeed","follow","postTweet","getNewsFeed","unfollow","getNewsFeed"]\n[[],[1,5],[1],[1,2],[2,6],[1],[1,2],[1]]'
 *
 * Design a simplified version of Twitter where users can post tweets,
 * follow/unfollow another user and is able to see the 10 most recent tweets in
 * the user's news feed. Your design should support the following methods:
 *
 *
 *
 * postTweet(userId, tweetId): Compose a new tweet.
 * getNewsFeed(userId): Retrieve the 10 most recent tweet ids in the user's
 * news feed. Each item in the news feed must be posted by users who the user
 * followed or by the user herself. Tweets must be ordered from most recent to
 * least recent.
 * follow(followerId, followeeId): Follower follows a followee.
 * unfollow(followerId, followeeId): Follower unfollows a followee.
 *
 *
 *
 * Example:
 *
 * Twitter twitter = new Twitter();
 *
 * // User 1 posts a new tweet (id = 5).
 * twitter.postTweet(1, 5);
 *
 * // User 1's news feed should return a list with 1 tweet id -> [5].
 * twitter.getNewsFeed(1);
 *
 * // User 1 follows user 2.
 * twitter.follow(1, 2);
 *
 * // User 2 posts a new tweet (id = 6).
 * twitter.postTweet(2, 6);
 *
 * // User 1's news feed should return a list with 2 tweet ids -> [6, 5].
 * // Tweet id 6 should precede tweet id 5 because it is posted after tweet id
 * 5.
 * twitter.getNewsFeed(1);
 *
 * // User 1 unfollows user 2.
 * twitter.unfollow(1, 2);
 *
 * // User 1's news feed should return a list with 1 tweet id -> [5],
 * // since user 1 is no longer following user 2.
 * twitter.getNewsFeed(1);
 *
 *
 */

namespace $335_design_twitter {
  class User {
    readonly fllowings: number[] = [];
    constructor(readonly id: number) {}
  }
  // tslint:disable-next-line:max-classes-per-file
  export class Twitter {
    private readonly _users = new Map<number, User>();
    private readonly _posts: Array<{ userId: number; tweetId: number }> = [];

    postTweet(userId: number, tweetId: number) {
      this._ensureUser(userId);
      this._posts.unshift({ tweetId, userId });
    }
    getNewsFeed(userId: number) {
      const news: number[] = [];
      const user = this._users.get(userId);
      if (user) {
        for (const post of this._posts) {
          if (post.userId === userId || user.fllowings.includes(post.userId)) {
            news.push(post.tweetId);
          }
        }
      }
      return news;
    }
    follow(followerId: number, followeeId: number) {
      this._ensureUser(followerId);
      const user = this._users.get(followerId)!;
      if (!user.fllowings.includes(followeeId)) {
        user.fllowings.push(followeeId);
      }
    }
    unfollow(followerId: number, followeeId: number) {
      this._ensureUser(followerId);
      const user = this._users.get(followerId)!;
      const index = user.fllowings.indexOf(followeeId);
      if (index !== -1) {
        user.fllowings.splice(index, 1);
      }
    }
    private _ensureUser(userId: number) {
      if (!this._users.has(userId)) {
        this._users.set(userId, new User(userId));
      }
    }
  }
}

mountNsToGlobal($335_design_twitter);
// include (./utils/mount-to-global.ts)

// const twitter = new $335_design_twitter.Twitter();
// twitter.postTweet(1, 5);
// twitter.getNewsFeed(1);
