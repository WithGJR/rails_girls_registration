class CreateRegistrationValues < ActiveRecord::Migration
  def change
    create_table :registration_values do |t|
      t.integer :activities_field_id
      t.integer :registration_id
      t.string :value

      t.timestamps null: false
    end
  end
end
