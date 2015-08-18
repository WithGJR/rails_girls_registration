class CreateActivitiesFields < ActiveRecord::Migration
  def change
    create_table :activities_fields do |t|
      t.integer :activity_id
      t.string :name
      t.string :type

      t.timestamps null: false
    end
  end
end
