import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';
import Input from '../../../components/ui/Input';
import Select from '../../../components/ui/Select';

const CreatePostModal = ({ isOpen, onClose }) => {
  const [postType, setPostType] = useState('outfit');
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [tags, setTags] = useState('');
  const [images, setImages] = useState([]);

  const postTypeOptions = [
    { value: 'outfit', label: 'Outfit Share' },
    { value: 'transformation', label: 'Style Transformation' },
    { value: 'challenge', label: 'Challenge Entry' },
    { value: 'question', label: 'Style Question' },
    { value: 'tip', label: 'Style Tip' }
  ];

  const handleImageUpload = (e) => {
    const files = Array.from(e?.target?.files);
    // In a real app, you would upload these files
    setImages(prev => [...prev, ...files?.map(file => URL.createObjectURL(file))]);
  };

  const removeImage = (index) => {
    setImages(prev => prev?.filter((_, i) => i !== index));
  };

  const handleSubmit = (e) => {
    e?.preventDefault();
    // Handle post creation
    console.log({ postType, title, description, tags, images });
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <div className="bg-card rounded-lg border border-border w-full max-w-2xl max-h-[90vh] overflow-y-auto">
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-border">
          <h2 className="text-2xl font-playfair font-bold text-primary">Share Your Style</h2>
          <Button variant="ghost" iconName="X" size="sm" onClick={onClose} />
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="p-6 space-y-6">
          {/* Post Type */}
          <Select
            label="Post Type"
            options={postTypeOptions}
            value={postType}
            onChange={setPostType}
            required
          />

          {/* Title */}
          <Input
            label="Title"
            type="text"
            placeholder="Give your post a catchy title..."
            value={title}
            onChange={(e) => setTitle(e?.target?.value)}
            required
          />

          {/* Description */}
          <div>
            <label className="block text-sm font-medium text-primary mb-2">
              Description
            </label>
            <textarea
              className="w-full min-h-[120px] p-3 border border-border rounded-lg resize-none focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent"
              placeholder="Tell your style story... What inspired this look? How does it make you feel?"
              value={description}
              onChange={(e) => setDescription(e?.target?.value)}
              required
            />
          </div>

          {/* Image Upload */}
          <div>
            <label className="block text-sm font-medium text-primary mb-2">
              Images
            </label>
            <div className="border-2 border-dashed border-border rounded-lg p-6 text-center">
              <input
                type="file"
                multiple
                accept="image/*"
                onChange={handleImageUpload}
                className="hidden"
                id="image-upload"
              />
              <label htmlFor="image-upload" className="cursor-pointer">
                <Icon name="Upload" size={32} className="text-muted-foreground mx-auto mb-2" />
                <p className="text-muted-foreground mb-1">Click to upload images</p>
                <p className="text-sm text-muted-foreground">PNG, JPG up to 10MB each</p>
              </label>
            </div>

            {/* Image Preview */}
            {images?.length > 0 && (
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mt-4">
                {images?.map((image, index) => (
                  <div key={index} className="relative">
                    <img
                      src={image}
                      alt={`Upload ${index + 1}`}
                      className="w-full h-32 object-cover rounded-lg"
                    />
                    <button
                      type="button"
                      onClick={() => removeImage(index)}
                      className="absolute -top-2 -right-2 bg-error text-error-foreground rounded-full p-1 hover:bg-error/80 smooth-transition"
                    >
                      <Icon name="X" size={16} />
                    </button>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Tags */}
          <Input
            label="Tags"
            type="text"
            placeholder="sustainable, vintage, confidence, workwear..."
            value={tags}
            onChange={(e) => setTags(e?.target?.value)}
            description="Separate tags with commas to help others discover your post"
          />

          {/* Privacy Settings */}
          <div className="bg-muted rounded-lg p-4">
            <h3 className="font-medium text-primary mb-3">Privacy & Sharing</h3>
            <div className="space-y-3">
              <label className="flex items-center space-x-3">
                <input type="checkbox" className="rounded border-border" defaultChecked />
                <span className="text-sm text-foreground">Allow others to share this post</span>
              </label>
              <label className="flex items-center space-x-3">
                <input type="checkbox" className="rounded border-border" />
                <span className="text-sm text-foreground">Cross-post to Instagram</span>
              </label>
              <label className="flex items-center space-x-3">
                <input type="checkbox" className="rounded border-border" />
                <span className="text-sm text-foreground">Cross-post to Pinterest</span>
              </label>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex space-x-4 pt-4">
            <Button variant="outline" fullWidth onClick={onClose}>
              Cancel
            </Button>
            <Button variant="default" fullWidth type="submit" iconName="Send" iconPosition="left">
              Share Post
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CreatePostModal;