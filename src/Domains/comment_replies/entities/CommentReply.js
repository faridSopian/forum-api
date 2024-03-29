/* eslint-disable operator-linebreak */
class CommentReply {
  constructor(payload) {
    this._verifyPayload(payload);
    this.id = payload.id;
    this.content = payload.is_delete
      ? '**balasan telah dihapus**'
      : payload.content;
    this.username = payload.username;
    this.date = payload.date;
    this.owner = payload.owner;
    this.is_delete = payload.is_delete;
  }

  _verifyPayload(payload) {
    const {
      id, username, content, is_delete: isDelete, date,
    } = payload;

    if (id == null || username == null || content == null || isDelete == null) {
      throw new Error('COMMENT_ENTITY.NOT_CONTAIN_NEEDED_PROPERTY');
    }

    if (
      typeof id !== 'string' ||
      typeof username !== 'string' ||
      typeof content !== 'string' ||
      typeof isDelete !== 'boolean' ||
      (date instanceof Date) === false
    ) {
      throw new Error('COMMENT_ENTITY.NOT_MEET_DATA_TYPE_SPECIFICATION');
    }
  }
}

module.exports = CommentReply;
