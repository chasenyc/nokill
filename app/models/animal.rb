class Animal < ActiveRecord::Base

  has_attached_file :image,
                    :styles => {
                      :thumb => "100x100",
                      :medium => "300x300"
                    },
                    default_url: "animalavatar.jpg"
  validates_attachment_content_type :image, content_type: /\Aimage\/.*\Z/
end
