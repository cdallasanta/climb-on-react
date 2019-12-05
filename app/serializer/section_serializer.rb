class SectionSerializer < ActiveModel::Serializer
  attributes :id, :complete, :title, :comments

  def comments
    comments = []
    object.comments.each do |comment|
      if comment.id
        comments << {
          id: comment.id,
          content: comment.content,
          user: {
            fullname: comment.user.fullname
          }
        }
      else
        comments << {
          id: comment.id,
          content: comment.content
        }
      end
    end

    return comments
  end
end