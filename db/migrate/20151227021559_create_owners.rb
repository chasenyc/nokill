class CreateOwners < ActiveRecord::Migration
  def change
    create_table :owners do |t|
      t.string    :email,             null: false, unique: true
      t.string    :password_digest,   null: false
      t.string    :session_token,     null: false

      t.string    :fname,             null: false
      t.string    :lname,             null: false
      t.string    :phone_number
      t.string    :pin,               null: false
      t.boolean   :email_verified,    null: false, default: false
      t.boolean   :phone_verified,    null: false, default: false

      t.timestamps                    null: false
    end
  end
end
