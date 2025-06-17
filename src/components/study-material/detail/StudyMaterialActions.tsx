
import React from "react";
import { Button } from "@/components/ui/button";
import { Save, Bookmark, Share, Download, Play, CreditCard } from "lucide-react";

interface StudyMaterialActionsProps {
  studyMaterial: {
    isPremium: boolean;
    price: number;
  };
  isSaved: boolean;
  isBookmarked: boolean;
  isPurchased: boolean;
  isProcessing: boolean;
  onSave: () => void;
  onBookmark: () => void;
  onShare: () => void;
  onDownload: () => void;
  onPurchase: () => void;
}

const StudyMaterialActions: React.FC<StudyMaterialActionsProps> = ({
  studyMaterial,
  isSaved,
  isBookmarked,
  isPurchased,
  isProcessing,
  onSave,
  onBookmark,
  onShare,
  onDownload,
  onPurchase,
}) => {
  return (
    <div className="flex flex-wrap items-center justify-between gap-4">
      <div className="flex items-center gap-3">
        <Button
          variant="outline"
          size="sm"
          onClick={onSave}
          className={isSaved ? "text-purple-600 border-purple-500" : ""}
        >
          <Save className={`w-4 h-4 mr-1 ${isSaved ? "fill-current" : ""}`} />
          {isSaved ? "Saved" : "Save"}
        </Button>
        <Button
          variant="outline"
          size="sm"
          onClick={onBookmark}
          className={isBookmarked ? "text-blue-500 border-blue-500" : ""}
        >
          <Bookmark className={`w-4 h-4 mr-1 ${isBookmarked ? "fill-current" : ""}`} />
          {isBookmarked ? "Bookmarked" : "Bookmark"}
        </Button>
        <Button variant="outline" size="sm" onClick={onShare}>
          <Share className="w-4 h-4 mr-1" />
          Share
        </Button>
      </div>
      
      <div className="flex gap-2">
        {!studyMaterial.isPremium || isPurchased ? (
          <Button 
            onClick={onDownload}
            className="bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700"
          >
            <Download className="w-4 h-4 mr-2" />
            Download PDF
          </Button>
        ) : (
          <>
            <Button variant="outline">
              <Play className="w-4 h-4 mr-2" />
              Preview
            </Button>
            <Button 
              onClick={onPurchase}
              disabled={isProcessing}
              className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700"
            >
              {isProcessing ? (
                "Processing..."
              ) : (
                <>
                  <CreditCard className="w-4 h-4 mr-2" />
                  Purchase - ${studyMaterial.price}
                </>
              )}
            </Button>
          </>
        )}
      </div>
    </div>
  );
};

export default StudyMaterialActions;
