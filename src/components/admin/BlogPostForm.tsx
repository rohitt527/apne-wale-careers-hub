
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { Check } from "lucide-react";

interface BlogFormData {
  title: string;
  author: string;
  category: string;
  featuredImage: File | null;
  excerpt: string;
  content: string;
  tags: string;
  isPublished: boolean;
}

const BlogPostForm = () => {
  const initialFormData: BlogFormData = {
    title: "",
    author: "",
    category: "",
    featuredImage: null,
    excerpt: "",
    content: "",
    tags: "",
    isPublished: true
  };
  
  const [formData, setFormData] = useState<BlogFormData>(initialFormData);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [imagePreview, setImagePreview] = useState<string | null>(null);
  const { toast } = useToast();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value, type } = e.target;
    
    if (type === "checkbox") {
      const checkbox = e.target as HTMLInputElement;
      setFormData({
        ...formData,
        [name]: checkbox.checked
      });
    } else {
      setFormData({
        ...formData,
        [name]: value
      });
    }
  };
  
  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      setFormData({
        ...formData,
        featuredImage: file
      });
      
      // Create preview
      const reader = new FileReader();
      reader.onloadend = () => {
        setImagePreview(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      // Here you would normally send data to your backend API
      // For demonstration, we'll simulate a successful submission
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      console.log("Blog post data:", formData);
      
      toast({
        title: "Blog post created!",
        description: `"${formData.title}" has been published.`,
      });
      
      // Reset form and show success message
      setFormData(initialFormData);
      setImagePreview(null);
      setIsSuccess(true);
      
      // Hide success message after a few seconds
      setTimeout(() => {
        setIsSuccess(false);
      }, 5000);
      
    } catch (error) {
      toast({
        title: "Error creating post",
        description: "There was an error publishing your blog post. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div>
      <h3 className="text-lg font-medium mb-4">Create New Blog Post</h3>
      
      {isSuccess && (
        <div className="bg-green-50 border border-green-200 text-green-700 p-4 rounded-md mb-6 flex items-center">
          <Check className="h-5 w-5 mr-2 text-green-500" />
          <span>Blog post created successfully!</span>
        </div>
      )}
      
      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="md:col-span-2">
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Blog Title *
            </label>
            <Input
              name="title"
              value={formData.title}
              onChange={handleChange}
              placeholder="Enter blog title"
              required
            />
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Author *
            </label>
            <Input
              name="author"
              value={formData.author}
              onChange={handleChange}
              placeholder="Enter author name"
              required
            />
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Category *
            </label>
            <Input
              name="category"
              value={formData.category}
              onChange={handleChange}
              placeholder="e.g. Career Tips, Tech News"
              required
            />
          </div>
          
          <div className="md:col-span-2">
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Featured Image
            </label>
            <div className="border-2 border-dashed border-gray-300 p-4 rounded-md">
              <Input
                name="featuredImage"
                type="file"
                onChange={handleFileChange}
                accept="image/*"
                className="mb-2"
              />
              
              {imagePreview && (
                <div className="mt-2">
                  <img 
                    src={imagePreview} 
                    alt="Preview" 
                    className="h-40 object-contain"
                  />
                </div>
              )}
            </div>
          </div>
          
          <div className="md:col-span-2">
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Excerpt *
            </label>
            <Textarea
              name="excerpt"
              value={formData.excerpt}
              onChange={handleChange}
              placeholder="Enter a short excerpt or summary (1-2 sentences)"
              required
            />
          </div>
          
          <div className="md:col-span-2">
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Blog Content *
            </label>
            <Textarea
              name="content"
              value={formData.content}
              onChange={handleChange}
              placeholder="Write your blog content here..."
              rows={12}
              required
            />
            <div className="text-xs text-gray-500 mt-1">
              You can use markdown formatting for headings, lists, links, etc.
            </div>
          </div>
          
          <div className="md:col-span-2">
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Tags
            </label>
            <Input
              name="tags"
              value={formData.tags}
              onChange={handleChange}
              placeholder="Enter comma-separated tags (e.g. career, interview, jobs)"
            />
          </div>
        </div>
        
        <div className="flex items-center space-x-2">
          <input
            type="checkbox"
            name="isPublished"
            id="isPublished"
            checked={formData.isPublished}
            onChange={handleChange as any}
            className="h-4 w-4 rounded border-gray-300"
          />
          <label htmlFor="isPublished" className="text-sm text-gray-700">
            Publish immediately (uncheck to save as draft)
          </label>
        </div>
        
        <div className="pt-4">
          <Button
            type="submit"
            className="bg-brand-red hover:bg-red-700 text-white"
            disabled={isSubmitting}
          >
            {isSubmitting ? "Publishing..." : "Publish Blog Post"}
          </Button>
        </div>
      </form>
    </div>
  );
};

export default BlogPostForm;
