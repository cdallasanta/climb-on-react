class UserSerializer < ActiveModel::Serializer
  attributes :id, :fullname, :email
  belongs_to :site
end