class Animal < ActiveRecord::Base

  has_attached_file :image,
                    :styles => {
                      :thumb => "100x100",
                      :medium => "300x300"
                    },
                    default_url: "animalavatar.jpg"
end
