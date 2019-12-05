class SectionSerializer < ActiveModel::Serializer
  attributes :id, :complete, :title, :comments

  def comments
    comments = []
    object.comments.each do |comment|
      comments << {
        id: comment.id,
        content: comment.content,
        user: {
          fullname: comment.user.fullname
        }
      }
    end

    return comments
  end
end