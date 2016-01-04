class Animal < ActiveRecord::Base

  validates :owner_id, :name, :gender, :birthdate, :breed_id,
            :species_id, :reason_id, :bitten, presence: true

  has_attached_file :image,
                    :styles => {
                      :thumb => "100x100",
                      :medium => "300x300"
                    },
                    default_url: "animalavatar.jpg"

  validates_attachment_content_type :image, content_type: /\Aimage\/.*\Z/

  belongs_to :reason
  belongs_to :breed
  belongs_to :species

end
